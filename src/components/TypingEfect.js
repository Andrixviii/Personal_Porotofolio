import React, { useEffect, useRef, useState } from 'react';

const TypingEffect = () => {
  const typedTextRef = useRef(null); // Ref untuk elemen HTML
  const texts = ["Hai There...", "Welcome to My Website!", "I'm a Front-end dev!"];
  const typingSpeed = 180; // Kecepatan mengetik
  const deletingSpeed = 140; // Kecepatan menghapus
  const delayAfterTyping = 500; // Delay setelah selesai mengetik
  const delayAfterDeleting = 500; // Delay sebelum mulai mengetik ulang
  const [textIndex, setTextIndex] = useState(0); // Indeks teks yang sedang ditampilkan
  const [index, setIndex] = useState(0); // Indeks karakter yang sedang diketik
  const [isDeleting, setIsDeleting] = useState(false); // Status mengetik atau menghapus

  useEffect(() => {
    const currentText = texts[textIndex]; // Teks yang sedang ditampilkan

    // Fungsi untuk menangani proses mengetik dan menghapus
    const handleTyping = () => {
      if (isDeleting) {
        // Proses menghapus karakter
        setIndex((prevIndex) => prevIndex - 1);
        if (index === 0) {
          // Jika teks habis terhapus, beralih ke teks berikutnya
          setIsDeleting(false);
          setTextIndex((prevTextIndex) => (prevTextIndex + 1) % texts.length); // Loop teks
        }
      } else {
        // Proses mengetik karakter
        setIndex((prevIndex) => prevIndex + 1);
        if (index === currentText.length) {
          // Jika teks sudah selesai diketik, mulai menghapus
          setTimeout(() => setIsDeleting(true), delayAfterTyping);
          return;
        }
      }
    };

    // Proses mengetik atau menghapus
    const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    // Mengatur teks yang ditampilkan dalam elemen
    if (typedTextRef.current) {
      typedTextRef.current.innerHTML = currentText.substring(0, index);
    }

    // Membersihkan timeout setelah tiap efek
    return () => clearTimeout(typingTimeout);
  }, [index, isDeleting, textIndex, texts]); // Dependensi untuk memicu ulang efek

  return <span ref={typedTextRef} id="typed-text"></span>;
};

export default TypingEffect;
