
export default function Card({title,value}){
  return <div style={{border:'1px solid #ccc',padding:10}}>
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
}
