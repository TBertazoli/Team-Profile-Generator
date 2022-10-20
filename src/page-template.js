const generateHtml = results => {
    return `
< !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <link rel="stylesheet" href="./src/style.css">
                            <!-- CSS only -->
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
                                integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
                                <link rel="stylesheet"
                                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                                <link rel="stylesheet"
                                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                                <link rel="stylesheet"
                                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                                <title>Team Profile Generator</title>
                            </head>

                            <body>
                                <header>
                                    <div class="container">
                                        <h1 class="d-flex justify-content-center pt-3 text-white">My Team</h1>
                                    </div>
                                </header>
                                <main>
                                    <div class="card mt-2" style="width: 18rem;">
                                        <div class="card-body bg-info">
                                            <h5 class="card-title">EMployee</h5>
                                            <p class="card-text">
                                                <span class="material-symbols-outlined">
                                                    coffee
                                                </span>
                                                <span class="material-symbols-outlined">
                                                    developer_mode
                                                </span>
                                                <span class="material-symbols-outlined">
                                                    school
                                                </span>and role</p>
                                        </div>
                                        <div class="card" style="width: 18rem;">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">ID:${this.id} </li>
                                                <li class="list-group-item">Email:${this.email} </li>
                                                <li class="list-group-item">Vestibulum at eros</li>
                                            </ul>
                                        </div>
                                    </div>
                                </main>
                                <footer class="container text-center py-3">
                                    <h5 class="text-dark">&copy;2022 Tatiana Bertazoli</h5>
                                </footer>
                            </body>

                        </html> `
}
