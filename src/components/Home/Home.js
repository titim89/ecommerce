import ItemListContainer from "../ItemListContainer/ItemListContainer"

const Home = (props) => {
    return (
        <div>
            <img
                src="../../images/imghome.jpg"
                alt="home"
                style={{ width: '100%', height: '450px', objectFit: 'cover' }}
            />
            <h1 style={{margin: '40px'}}>{props.prod}</h1>
            <ItemListContainer/>
        </div>
    )
}
   

export default Home;