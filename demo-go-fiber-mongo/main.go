package main

import (
	"context"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	app := fiber.New()

	setUpRoutes(app)

	app.Listen(":3000")
}

func connect() *mongo.Collection {
	clientOptions := options.Client().ApplyURI("mongodb+srv://sgoclock:1hQpIlu7nFgVs4Zh@cluster0.a4pmikl.mongodb.net/users")

	client, err := mongo.Connect(context.TODO(), clientOptions)
	
	if err != nil {
		panic(err)
	}

	collection := client.Database("users").Collection("users")

	return collection
}

func setUpRoutes(app *fiber.App) {
	app.Get("/users", getUsers);
	app.Post("/users", addUser);
}

func getUsers(c *fiber.Ctx) error {
	collection := connect()
	cursor, err := collection.Find(context.TODO(), bson.D{})
	if err != nil {
		return c.Status(500).SendString("Error")
	}
	var users []bson.M

	if err = cursor.All(context.TODO(), &users); err != nil {
		return c.Status(500).SendString("Error")
	}

	return c.JSON(users)
}

func addUser(c *fiber.Ctx) error {
	collection := connect()

	var user bson.M

	if err := c.BodyParser(&user); err != nil {
		return c.Status(500).SendString("Error")
	}
	_, err := collection.InsertOne(context.TODO(), user)

	if err != nil {
		return c.Status(500).SendString("Error")
	}

	return c.JSON(user)
}