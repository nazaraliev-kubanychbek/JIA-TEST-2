import styles from './FirstSection.module.scss';

export const FirstSection = () => {
    return (
        <section className={styles.container}>
            <img width={2000} src="https://s3-alpha-sig.figma.com/img/52aa/46a9/f082f3568272f5bd4564904e28bad2d8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XXxJTrPPNJ0yEqwxZZblOpTfnScX3jB4d3XBgc1d-DTOC59A39OQwmrDdNTcXIShnW8F-g19aMGzuI0Sc5z6lEFdb-zFX5oDOdrT6lDJE40o40kR7VsknvrJ36lDfVKKrUo3sVglBMTX1hVQ6ZmECiBk0Mq5pettneuS1YQzM6s6XGpf1bcAe~BqJFYyWpiKyb~U-OvODbJ2ECLCxgeiE5BWcNQcHhlhEeg5cVlzBMntYeZTuuxhLrtgKV2ou~t6gCmtT8LFgF97~Okn-TIpdYDsH3V6AChKKfyEouQwZlQ0yW8IILjReqABVXmt~hcwajG-DruG5vsdwE5a4WQMsw__" alt="" />
            
            <div className={styles.text}>   
                <div className={styles.discription}>
                    <p>О проекте</p>
                </div>
                <h1>Бишкек, Кыргызстан</h1>
            </div>
        </section>
    );
}

