export default async function UmProduto({params: {idDoProduto}}){

    const result = await fetch(`https://fakestoreapi.com/products/${idDoProduto}`)

    const data = await result.json()

    return <div>
        <h1>{data.title}</h1>
        <img src={data.image} />
        <p>{data.description}</p>
        <p>{data.price}</p>
    </div>
}