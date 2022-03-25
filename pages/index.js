import { useRef } from "react";
import { useState } from 'react';
import Avatar from '../components/avatar';
import Button from "../components/button"
import { ImageUploader } from '../components/imageUploader';

export default function Home() {
  const [image, setImage] = useState(null);
  const inputReference = useRef(null);
  console.log(image);
  return (
    <>
      <h1>Hello, Zooagram</h1>
      <button onClick={() => inputReference?.current?.click()}>Open File Selector</button>
      <ImageUploader 
        setImage={setImage} 
        imagePreview={image?.preview}
        settingRef={(ref) => inputReference.current = ref}
      />
      <div style={{width: 200}}>
        <Avatar />
        <Button 
          text={'Login'} 
          //disabled={true}
          //color='inverted_color' 
          clickManager={() => console.log('click')} />
      </div>
    </>
  );
}
