<div align="center">
    <h1>TypeScipt Test Task | Luxonis</h1>

<a href="https://t.me/ExposedCatDev">

![](https://img.shields.io/badge/Telegram-Developer-informational?style=for-the-badge&logo=telegram&logoColor=26A5E4&color=26A5E4)
</a>
<a href="https://www.reddit.com/user/ExposedCatDev">
![](https://img.shields.io/badge/Reddit-Developer-informational?style=for-the-badge&logo=reddit&logoColor=FF5700&color=FF5700)
</a>

<img src="./git-assets/preview.png" alt="App preview">

</div>

<div align="center">
    <h2>📄 Documentation</h2>
    <p>API documentation can be found <a href="./DOCS.md">here</a></p>
</div>

<div align="center">
    <h2>⭐️ Features</h2>
</div>
<ul>
    <li>Dynamic pages parsing</li>
    <li>Pagination support</li>
    <li>Cookies-safe parsing</li>
    <li>Docker support</li>
    <li>Strict code formatting rules</li>
    <li>Scalable file architecture</li>
    <li>Well-readable git repository with a beautiful README</li>
</ul>

<div align="center">
    <h2>⚙️ Stack</h2>
</div>
<ul>
    <li>Programming language: TypeScript</li>
    <li>Libraries: Puppeteer, Express</li>
    <li>UI: EJS, EJS-Layouts</li>
    <li>Running tools: Node.JS, Docker</li>
</ul>

<div align="center">
    <h2>🔌 Running</h2>
</div>

<div align="center">
    <h3>via pure Node.JS</h3>
</div>

1. Clone this repo:

```bash
git clone https://github.com/ExposedCat/luxonis-test.git
```

2. Go to the project root:

```bash
cd luxonis-test
```

3. Create copy of `.env-example` called `.env` and replace example data with yours
- Use database container name as a database host if running via Docker/Podman

4. Start app:

```bash
npm start
```

<div align="center">
    <h3>via Docker</h3>
</div>

1. Clone this repo:

```bash
git clone https://github.com/ExposedCat/luxonis-test.git
```

2. Go to the project root:

```bash
cd luxonis-test
```

3. Create copy of `.env-example` called `.env` and replace example data with yours
4. Start app
```bash
bash ./run-docker
```
- OR

```bash
bash ./run-podman
```
5. Stop app
```bash
bash ./stop-docker
```

- OR
```bash
bash ./stop-podman
```