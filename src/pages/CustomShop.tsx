export default function CustomShop() {
    return (
        <div className="custom_shop">
            <span>Théme</span>
            <section className="current_theme">
                <div className="cover" style={{ backgroundImage: 'url(/images/theme-cover.webp)' }}>
                    <div>
                        <div className="card_theme">
                            <img src="/images/thumb_current_theme.webp" alt="current_theme" />
                            <div className="text">
                                <div className="name">Name theme</div>
                                <div className="date">2023-28-12</div>
                            </div>
                        </div>
                        <button className="button">Customiser <i className="fa fa-paint-brush"></i></button>
                    </div>
                </div>
            </section>
            <span>Choisissez un théme pour votre boutique</span>
            <section className="choise_theme">
                <div className="card_theme">
                    <img src="/images/thumb_current_theme.webp" alt="current_theme" />
                    <div className="text">
                        <div className="name">Name theme</div>
                        <div className="date">2023-28-12</div>
                    </div>
                </div>
                <button className="button">Customiser <i className="fa fa-paint-brush"></i></button>
            </section>
        </div>
    )
}
