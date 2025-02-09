"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const inputRef = useRef();

  function handlePickClick() {
    inputRef.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPickedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else setPickedImage(null);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}> {label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked.</p>}
          {pickedImage && <Image src={pickedImage} alt="Preview image" fill />}
        </div>
        <input
          ref={inputRef}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jped"
          name={name}
          onChange={handleImageChange}
          required
        />
        <button
          onClick={handlePickClick}
          className={classes.button}
          type="button"
        >
          Pick Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
