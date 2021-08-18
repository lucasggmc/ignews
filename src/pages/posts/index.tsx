import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts(){
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating test teste test</strong>
                        <p>In this guide test test test test test test test test testtest test 
                            test test test test test test test
                        </p>
                    </a>

                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating test teste test</strong>
                        <p>In this guide test test test test test test test test testtest test 
                            test test test test test test test
                        </p>
                    </a>

                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating test teste test</strong>
                        <p>In this guide test test test test test test test test testtest test 
                            test test test test test test test
                        </p>
                    </a>
                </div>
            </main>
        </>
    );
}