import FlashCard from './FlashCard';

const Test = ({qs}) => {

    return (
      <>
        <h1>Flash Cards</h1>
        {qs.map((q) => (  
          <FlashCard key={q.id} qs={q} /> 
        ))}  
      </>
    )
}

export default Test
