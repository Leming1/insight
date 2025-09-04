import React from 'react';
import Button from '../ui/Button';

export default function Questions() {
  return (
    <section className="py-10 md:py-20 bg-[#F5FAFF]">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-roboto)', color: 'var(--black)' }}>
          Остались вопросы?
        </h2>
        <Button
          as="a"
          href="https://wa.me/79000000000"
          target="_blank"
          variant="primary-teal"
          size="50"
          className="!bg-[#25D366] hover:!bg-[#1FAD4F] inline-flex items-center justify-center w-auto"
        >
          Whatsapp
        </Button>
      </div>
    </section>
  );
}
