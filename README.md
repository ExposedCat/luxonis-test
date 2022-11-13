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
    <li>Parsing tool: Puppeteer</li>
    <li>Programming language: TypeScript</li>
    <li>Running tools: Node.JS</li>
</ul>

<div align="center">
    <h2>🔌 Running</h2>
</div>

<div align="center">
    <h2>via pure Node.JS</h2>
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

⚠️ Use database container name as a database host if running via Docker/Podman  

4. Start app:

```bash
npm start
```

**Done**.

<div align="center">
    <h2>via Docker</h2>
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
   4.1. Via bash script:

    ```bash
    bash ./run-docker
    ```

    OR  

    Give a try to the [Podman](https://podman.io/) - modern Docker-compatible containerization utility:

    ```bash
    bash ./run-podman
    ```

    4.2. Manually  
    4.2.1. Build image:

    ```bash
    docker build -t sreality-parser .
    ```
    OR

    ```bash
    podman build -t sreality-parser .
    ```

    4.2.2. Run image:

    ```bash
    docker-compose up -d --build
    ```

    OR

    ```bash
    podman-compose up -d --build
    ```
  
**Done**.

<div align="center">
    <h2>🔩 Dependencies</h2>
</div>
<h3>Production</h3>
<ul>
    <li>Puppeteer</li>
</ul>
<h3>Development</h3>
<ul>
    <li>TypeScript</li>
    <li>Prettier</li>
</ul>
