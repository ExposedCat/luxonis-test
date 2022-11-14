# API docs

## View apartments

Renders human-readable (HTML) list of apartments.

### Endpoint

```
GET /
```

| Parameter        | Required | Description                      |
| ---------------- | -------- | -------------------------------- |
| `page`           | Yes      | Apartments page number           |
| `resultsPerPage` | Yes      | Number of apartments to be shown |

## API home page

### Endpoint

```
GET /api
```

## Get apartments

Returns machine-readable (JSON) list of apartments.

### Endpoint

```
GET /api/apartments
```

| Parameter        | Required | Description                      |
| ---------------- | -------- | -------------------------------- |
| `page`           | Yes      | Apartments page number           |
| `resultsPerPage` | Yes      | Number of apartments to be shown |

## Delete apartments

Deletes all stored apartments.

### Endpoint

```
POST /api/apartments/flush
```

## parse apartments

Parses apartments

### Endpoint

```
POST /api/apartments/parse
```

| Parameter          | Required | Description                   |
| ------------------ | -------- | ----------------------------- |
| `apartmentsNumber` | Yes      | Number of apartments to parse |
