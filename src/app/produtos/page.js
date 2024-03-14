import Link from 'next/link'

export default async  function Produtos(){

    const result = await fetch("https://fakestoreapi.com/products")
    const data = await result.json()

    return <div>
        {data.map((produto, idx) => {
            return <Link href={`/produtos/${produto.id}`}
             key={idx} className="flex flex-col gap-4 justify-center items-center bg-white text-black">
                <h1>{produto.title}</h1>
                <img className="max-w-20" src={produto.image} />
                <p>{produto.description}</p>
                <p>{produto.price}</p>
            </Link>
        })}
    </div>
}