interface Props {
    currentPage: string;
}
function SubTopBar(props: Props) {
    const { currentPage } = props
    const currentPath = window.location.pathname

    const rootPath: boolean = currentPath === "/" || currentPath === "/home"

    const goBack = (): void => {
        window.history.back()
    }

    return (
        <div className="sub_top_bar">
            <i
                className={rootPath ? 'fa fa-angle-left disable' : 'fa fa-angle-left'}
                onClick={goBack}
            ></i>
            <div className="arian">
                <strong>{currentPage}</strong>
            </div>
        </div>
    )
}

export default SubTopBar