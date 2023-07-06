
function Pagination(props: any) {
    const totalPages = 1

    const page = 1

    const handelPage = (ev: any) => {
        const action: string = ev.currentTarget.dataset.action

        // switch (action) {
        //     case "next":
        //         if (page < totalPages) dispatch(setPeriode({ page: page + 1 }))
        //         break;
        //     case "prev":
        //         if (page !== 1) dispatch(setPeriode({ page: page - 1 }))
        //         break;
        //     case "last":
        //         if (page !== totalPages) dispatch(setPeriode({ page: totalPages }))
        //         break;
        //     case "first":
        //         if (page !== totalPages) dispatch(setPeriode({ page: 1 }))
        //         break;
        // }
    }
    return (
        <div>
            <div className="pagination">
                <button
                    onClick={handelPage}
                    className={page <= 1 ? "prev disable" : "prev"}
                    data-action='prev'
                > <i className='fa fa-angle-left'></i>
                </button>
                <div className='pages'>
                    <span className="page" onClick={handelPage} data-action='first'>{page}</span>
                    /
                    <span className="totalPages" onClick={handelPage} data-action='last' >{totalPages}</span>
                </div>
                <button
                    onClick={handelPage}
                    className={page === totalPages ? "next disable" : "next"}
                    data-action='next'
                ><i className='fa fa-angle-right'></i>
                </button>
            </div>
        </div>
    );
}

export default Pagination;