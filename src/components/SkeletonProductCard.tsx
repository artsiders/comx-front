import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SkeletonProductCard = () => {
    return (
        <SkeletonTheme
            baseColor="var(--skeleton-base-color)"
            highlightColor="var(--skeleton-highlight-color)"
        >
            <div
                className="user_product_cart"
                style={{
                    padding: 10,
                }}
            >
                <div className="image">
                    <Skeleton
                        height={140}
                        width={'100%'}
                    />
                </div>
                <div className="details">
                    <h3 className="name">
                        <Skeleton
                            height={15}
                            width={'100%'}
                        />
                    </h3>
                    <p className="price">
                        <Skeleton
                            height={15}
                            width={'80%'}
                        />
                    </p>
                    <div className="action">
                        <Skeleton
                            height={20}
                            width={'40%'}
                        />
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

export default SkeletonProductCard
