import Header from './components/Header';
import Section from './components/Section';
import Button from './components/Button/Button';
import { sectionData } from './data/section';

export default function App() {
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
                        <Button>Text 1</Button>
                        <Button>Text 2</Button>
                        <Button>Text 3</Button>
                    </section>
                </main>
            </div>
        </>
    );
}
