import Button from "../components/button"

export default function Home() {
  return (
    <>
      <h1>Hello, Zooagram</h1>
      <Button 
        text={'Login'} 
        //disabled={true}
        //color='inverted_color' 
        clickManager={() => console.log('click')} />
    </>
  );
}
