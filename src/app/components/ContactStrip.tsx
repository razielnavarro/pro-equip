const ContactStrip = () => {
  return (
    <div className="bg-red-800 text-white text-sm py-2 px-4 flex items-center justify-center gap-8">
      <a
        href="tel:+50766732524"
        className="hover:text-red-600 flex items-center gap-1"
      >
        <span>📞</span> <span>+507 6673-2524</span>
      </a>
      <a
        href="https://wa.me/50766732524"
        className="flex items-center gap-1 hover:text-green-400"
      >
        <img
          src="/assets/whatsapp-icon.svg"
          alt="WhatsApp"
          className="w-5 h-5"
        />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default ContactStrip;
