import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SkeletonUserProductDetail = () => {
    return (
        <SkeletonTheme
            baseColor="var(--skeleton-base-color)"
            highlightColor="var(--skeleton-highlight-color)"
        >
            <section className="user_product_detail">
                <div className="image">
                    <Skeleton
                        height={300}
                        width={'100%'}
                    />
                </div>
                <div className="details">
                    <p className="name">
                        <Skeleton
                            height={25}
                            width={'100%'}
                        />
                    </p>
                    <p className="price">
                        <Skeleton
                            height={25}
                            width={'70%'}
                        />
                    </p>
                    <p className="tag">
                        <Skeleton
                            height={25}
                            width={'50%'}
                        />
                    </p>
                    <p>
                        <Skeleton
                            height={25}
                            width={'15%'}
                        />
                    </p>
                    <p>
                        <Skeleton
                            height={100}
                            width={'100%'}
                        />
                    </p>
                    <div className="action">
                        <div style={{ width: "100%" }}></div>
                        <Skeleton
                            height={30}
                            width={'100%'}
                        />
                    </div>
                </div>
            </section>
        </SkeletonTheme>
    )
}


export default SkeletonUserProductDetail;