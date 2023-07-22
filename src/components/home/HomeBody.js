import classes from "./HomeBody.module.css";

function HomeBody() {
    return (
        <section className={classes.container}>
            <div className={classes.news}>
                <h1>Relatórios Teocraticos</h1>
                <p>
                    Gerencie de forma simples e prática os seus relatorios,
                    obtenha insights sobre a seu trabalho ao longo do ano.
                </p>
                <div className={classes["news-box"]}>
                    <h1>Noticias</h1>
                    <h2>
                        Mundo enfrenta ondas de calor intensas em 2023 — O que a
                        Bíblia diz?
                    </h2>
                    <p>
                        No mundo todo, as pessoas estão enfrentando ondas de
                        calor sem precedentes e eventos climáticos extremos.
                        <a href="https://www.jw.org/pt/biblioteca/series/outros-assuntos/mundo-enfrenta-ondas-calor-2023-biblia/">
                            Leia mais
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HomeBody;
