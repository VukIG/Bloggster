## Reference

#### Get all posts

```http
  GET /posts?page=${pageNumber}
```

| Parameter    | Type     | Description              |
| :----------- | :------- | :----------------------- |
| `pageNumber` | `number` | Fetches 8 posts per page |

#### Get post

```http
  GET /posts/${id}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | Fetches the item with given **id** |

#### Search by Title and Tags

```http
  GET /posts/search?searchQuery=${searchString}&tags=${searchTags}
```

| Parameter      | Type     | Description                  |
| :------------- | :------- | :--------------------------- |
| `searchString` | `string` | Name of the post to look for |
| `searchTags`   | `string` | Tags of the post to look for |

#### Get posts by creator

```http
  GET /posts/creator?creator=${creatorName}
```

| Parameter    | Type     | Description              |
| :----------- | :------- | :----------------------- |
| `pageNumber` | `number` | Fetches 8 posts per page |

#### Create a post

```http
  POST /posts/createPost
```
