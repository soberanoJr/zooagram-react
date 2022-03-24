import Avatar from '../components/avatar';
import Button from "../components/button"

export default function Home() {
  return (
    <>
      <h1>Hello, Zooagram</h1>
      <Avatar />
      <Button 
        text={'Login'} 
        //disabled={true}
        //color='inverted_color' 
        clickManager={() => console.log('click')} />
    </>
  );
}
