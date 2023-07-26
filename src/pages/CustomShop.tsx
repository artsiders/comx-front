export interface Theme {
    image: string;
    name: string;
    date: string;
}

export default function CustomShop() {
    const themes: Theme[] = [
        {
            image: "thumb-theme-1.webp",
            name: "Theme 1",
            date: "2023-28-12",
        },
        {
            image: "thumb-theme-2.webp",
            name: "Theme 2",
            date: "2023-28-12",
        },
        {
            image: "thumb-theme-3.webp",
            name: "Theme 3",
            date: "2023-28-12",
        },
    ]
    return (
        <div className="custom_shop">
            <span>Théme</span>
            <section className="current_theme">
                <div className="cover" style={{ backgroundImage: 'url(/images/theme-cover.webp)' }}>
                    <div>
                        <div className="card_theme">
                            <img src="/images/thumb-theme-1.webp" alt="current_theme" />
                            <div className="text">
                                <div className="name">Name theme</div>
                                <div className="date">2023-28-12</div>
                            </div>
                        </div>
                        <button className="button">Customiser <i className="fa fa-paint-brush"></i></button>
                    </div>
                </div>
            </section>
            <section className="choise_theme">
                <span>Choisissez un théme pour votre boutique</span>
                <div className="themes">
                    {themes.map((theme: Theme, key: number) =>
                        <div className="card_theme" key={key}>
                            <div className="image">
                                <img src={`/images/${theme.image}`} alt={theme.name} />
                            </div>
                            <div className="details">
                                <h3 className="name">{theme.name}</h3>
                                <p className="date">{theme.date}</p>
                                <button className="button">
                                    Choisir
                                    <i className='fa fa-check'></i>
                                </button>
                            </div>
                        </div>)}
                </div>
            </section>
        </div>
    )
}
