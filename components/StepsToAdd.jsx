import Link from 'next/link';


const StepsToAdd = ({ projects }) => (
    <div className="bg-white">
        <div className="container py-4 mx-auto">
            <h3 className="text-2xl text-gray-800 p-3 lg:py-6 font-semibold font-serif">Quer adicionar seu comércio?</h3>
            <div className="container flex justify-around flex-wrap">
                <div className="flex lg:flex-1 flex-col justify-center items-center p-3">
                    <h4 className="text-xl font-medium text-gray-800 self-start font-serif">Passo 1</h4>
                    <div><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" className="w-16 h-16"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                    <p className="p-6 text-center text-gray-800">Envie informações do seu projeto: nome, descrição, logo (300x300), 1 imagem (800x450), endereço de tuas redes sociais (Instagram, Facebook, E-mail, celular)</p>
                </div>
                <div className="flex lg:flex-1 flex-col justify-center items-center p-3">
                    <h4 className="text-xl font-medium text-gray-800 self-start font-serif">Passo 2</h4>
                    <div><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" className="w-16 h-16"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></div>
                    <p className="p-6 text-center text-gray-800">Fale um pouco do impacto em seus negócios por causa da pandemia, acima de tudo, que impacto positivo direto sua empresa terá para cada compra (exemplo: poder pagar a folha de pagamento de alguns funcionários, continuar pagando seus fornecedores...) </p>
                </div>
                <div className="flex lg:flex-1 flex-col justify-center items-center p-3">
                    <h4 className="text-xl font-medium text-gray-800 self-start font-serif">Passo 3</h4>
                    <div><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" className="w-16 h-16"><path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                    <p className="p-6 text-center text-gray-800">
O que você gostaria que os consumidores fizessem por você? (Ex: peça comida em casa, use seu serviço de entregas ou entregas, compre seus serviços com antecedência, deixe mais dicas para que os comerciantes saibam).</p>
                </div>
            </div>
        </div>
        <div>
            <p className="text-center text-gray-800 p-6">Depois de ter todas as informações, envie-as para <a className="font-semibold hover:underline" href="mailto:butantem@gmail.com">butantem@gmai.com</a> para que publiquemos.</p>
        </div>
    </div>
);

export default StepsToAdd;

