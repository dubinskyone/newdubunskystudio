import { Methodology } from '../Methodology';
import { Transparency } from '../Transparency';
import { Team } from '../Team';

export default function PlatformSections() {
  return (
    <>
      <section id="platform">
        <Methodology />
      </section>
      <section id="integration">
        <Transparency />
        <Team />
      </section>
    </>
  );
}
