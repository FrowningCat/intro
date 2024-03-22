import Header from './components/Header';
import Section from './components/Section';
import Button from './components/Button/Button';
import { sectionData } from './data/section';
import { differences } from './data/differences';
import { useState } from 'react';

export default function App() {
    const [content, setContent] = useState('clicking button');

    function handleClick(type) {
        setContent(type);
    }

    return (
        <>
            <div>
                <Header />
                <main>
                    <section>
                        <ul>
                            <Section
                                title={sectionData[0].title}
                                description={sectionData[0].description}
                            />
                        </ul>
                    </section>
                    <section>
                        <h3>Title</h3>
                        <Button onClick={() => handleClick('way')}>
                            Text 1
                        </Button>
                        <Button onClick={() => handleClick('easy')}>
                            Text 2
                        </Button>
                        <Button onClick={() => handleClick('program')}>
                            Text 3
                        </Button>
                        <p>{differences[content]}</p>
                    </section>
                </main>
            </div>
        </>
    );
}
