import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About us</h1>
      <p>
        Nwick Digital is a collection of innovative and powerful news brands
        that deliver compelling, diverse and visually engaging stories on your
        platform of choice. Nwick News Digital features world-class brands
        including Nwick, Nightly News, Meet the Press, Dateline, and the
        existing apps and digital extensions of these respective properties. We
        provide something for every news consumer with our comprehensive
        offerings that deliver the best in breaking news, segments from your
        favorite Nwick shows, live video coverage, original journalism,
        lifestyle features, commentary and local updates.
      </p>
      <p>CLOSED CAPTIONING</p>
      <p>
        Nwick is pleased to offer closed captioning on long-form content and
        certain other content that it makes available on television and online
        via websites and apps on mobile devices. To report an issue or concern
        regarding closed captioning on Nwick programs viewed on television or
        online.
      </p>
      <p>
        To assist us in resolving the issue, please provide the following
        information when you contact us for assistance with captions:
      </p>
      <p>
        Your name, address, telephone number and email address Your preferred
        method of contact (phone or email) The name of the program with the
        captioning issue A brief description of the captioning issue, including
        the date and time you experienced the problem If you are watching on
        television, please provide the name of your pay TV provider If you are
        watching online, please identify the device and brand (e.g., computer,
        tablet, smartphone) and software (including version) you are using.
      </p>
    </div>
  );
}

export default About;
