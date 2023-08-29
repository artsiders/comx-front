import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

interface Props {
    dashboard?: boolean;
    count: number;
}

const SkeletonProductCard = ({ dashboard, count }: Props) => {
    return (
        <SkeletonTheme
            baseColor="var(--skeleton-base-color)"
            highlightColor="var(--skeleton-highlight-color)"
        >
            <div
                className="user_product_cart animated fadeInUp"
                style={{
                    padding: 10,
                    animationDelay: `${count}00ms`
                }}
            >
                <div className="image">
                    <Skeleton
                        height={dashboard ? 200 : 140}
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
                    {dashboard && <div style={{ marginTop: 20 }}>
                        <Skeleton
                            height={40}
                            width={'100%'}
                        />
                    </div>}
                </div>
            </div>
        </SkeletonTheme>
    )
}

export default SkeletonProductCard
