

# Server API



## Note

Ubaciti `.env` file pre koriscenja!\
Template za `.env` je `envtemp`


## Reference

#### Get all posts

```http
  GET /posts/
```

#### Get post

```http
  GET /posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Fetches the item with given **id** |

#### Search by Title and Tags

```http
  GET /posts/search?searchQuery=${searchString}&tags={$searchTags}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `searchString`      | `string` | Name of the post to look for |
| `searchTags`      | `string` | Tags of the post to look for |
