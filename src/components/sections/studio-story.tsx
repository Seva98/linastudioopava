import { Container } from "../ui/container";

export function StudioStory() {
  return (
    <section className="studio-story">
      <Container>
        <div className="studio-story__copy">
          <p>
            Lina Studio vzniklo z lásky k pohybu a s myšlenkou vytvořit v Opavě prostor, kam se budete těšit nejen na lekci, ale i na samotný pocit, který Vám přinese.
          </p>
          <p>
            Věříme, že pohyb není jen o výkonu nebo vzhledu. Je o síle, zdravém těle, energii a chvíli, kterou věnujete sami sobě.
          </p>
          <p>
            Proto u nás propojujeme Pilates, Reformer a Barre - metody, které pracují s tělem komplexně, pomáhají budovat sílu, zlepšovat držení těla, mobilitu i celkovou kondici.
          </p>
          <p>
            Lina je místo pro začátečníky i zkušené klienty. Pro každého, kdo chce své tělo lépe poznat, posílit a naučit se s ním pracovat.
          </p>
          <p className="studio-story__statement">
            Nejde nám jen o to, jak se hýbete.
            <br />
            Chceme, abyste se díky pohybu cítili lépe.
          </p>
          <p className="studio-story__welcome">Vítejte v Lina Studio Opava</p>
        </div>
      </Container>
    </section>
  );
}
