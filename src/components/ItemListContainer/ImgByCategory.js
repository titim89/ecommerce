import CategoryImg from "../../CategoryImg"

const ImgByCategory = ({imgCategory}) => {
    const image = CategoryImg.filter((img) => img.categoryId === imgCategory)
    
    return (
        <div>
            {image.length > 0 && (
                <div>
                    <img
                        src={image[0].img}
                        alt="categories"
                        style={{
                            width: '100%',
                            height: '350px',
                            objectFit: 'cover',
                            marginBottom: '40px',
                        }}
                    />
                </div>
            )}
        </div>
    )
}

export default ImgByCategory;