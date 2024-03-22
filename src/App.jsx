import Header from './components/Header';
import Section from './components/Section';
import Button from './components/Button/Button';
import { sectionData } from './data/section';
import { differences } from './data/differences';
import { useState } from 'react';

export default function App() {
    const [contentType, setContentType] = useState(null);

    function handleClick(type) {
        setContentType(type);
    }

    // let tubContent = null;

    // if (contentType) {
    //     tubContent = <p>{differences[contentType]}</p>;
    // } else {
    //     tubContent = <p>click button</p>;
    // }

    return (
        <>
            <div>
                <Header />
                <main>
                    <section>
                        <ul>
                            {sectionData.map((item) => (
                                <Section {...item} />
                            ))}
                        </ul>
                    </section>
                    <section>
                        <h3>Title</h3>

                        <Button
                            isActive={contentType === 'way'}
                            onClick={() => handleClick('way')}
                        >
                            Text 1
                        </Button>
                        <Button
                            isActive={contentType === 'easy'}
                            onClick={() => handleClick('easy')}
                        >
                            Text 2
                        </Button>
                        <Button
                            isActive={contentType === 'program'}
                            onClick={() => handleClick('program')}
                        >
                            Text 3
                        </Button>

                        {/* {contentType ? (
                            <p>{differences[contentType]}</p>
                        ) : (
                            <p>click button</p>
                        )} */}

                        {/* {tubContent} */}

                        {!contentType && <p>click button</p>}
                        {contentType && <p>{differences[contentType]}</p>}
                    </section>
                </main>
            </div>
        </>
    );
}
