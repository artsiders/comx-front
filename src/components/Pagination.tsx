
export default function Pagination() {
    const totalPages = 1
    const page = 1

    return (
        <div>
            <div className="pagination">
                <button
                    className={page <= 1 ? "prev disable" : "prev"}
                    data-action='prev'
                > <i className='fa fa-angle-left'></i>
                </button>
                <div className='pages'>
                    <span className="page" data-action='first'>{page}</span>
                    /
                    <span className="totalPages" data-action='last' >{totalPages}</span>
                </div>
                <button
                    className={page === totalPages ? "next disable" : "next"}
                    data-action='next'
                ><i className='fa fa-angle-right'></i>
                </button>
            </div>
        </div>
    );
}