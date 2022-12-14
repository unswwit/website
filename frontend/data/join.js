const memberQuotes = {
  // name, role, image, quote
  0: [
    'Vivian Wang',
    '2022 Careers Co-Director | 2021 Events Subcommittee Member',
    '2022-exec/VivWang.jpg',
    'WIT has given me the opportunity to learn from some of the most amazing and inspiring people, and helped me grow and achieve so many new things.',
  ],
  1: [
    'Brianna Kim',
    '2022 Careers Co-Director | 2021 HR Subcommittee Member',
    '2022-exec/Brianna.jpg',
    "WIT's supportive environment has allowed me to grow both personally and professionally.",
  ],
  2: [
    'Emily Dang',
    '2022 General Secretary | 2021 Events Subcommittee Member',
    '2022-exec/EmilyD.png',
    'Being a part of WIT has allowed me to grow so much both professionally and personally. It has opened my eyes to the numerous opportunities available in the technology industry.',
  ],
  3: [
    'Gayathri Balaji',
    '2022 Externals Co-Director',
    '2022-exec/Gayathri.jpg',
    "Speaking with representatives from sponsor companies as External Relations Co-Director I have come to learn that there is far more to the tech industry than I once imagined. WIT has given me an opportunity to learn about this, which I am incredibly thankful for. It's shifted my perspective on tech.",
  ],
  4: [
    'Emily Chang',
    '2022 HR Director | 2021 HR Subcommittee Member',
    '2022-exec/EmChang.jpg',
    "For me, what's worthwhile about being an internal member of WIT's team, and even just attending events, is getting to connect with likeminded, driven people. We're a very wholesome team and you really get a feel for WIT's mission to empower students at every event.",
  ],
  5: [
    'Joanna He',
    '2022 IT Director | 2021 IT Subcommittee Member',
    '2022-exec/Joanna.jpg',
    'Being able to meet people from all walks of life and develop myself has been such an amazing experience!',
  ],
  6: [
    'Gabriella Hartanto',
    '2022 Marketing Co-Director | 2021 Marketing Subcommittee Member',
    '2022-exec/Gab.jpg',
    "It's incredible to meet with amazing like-minded people, especially other women in the field of STEM. I learned a variety of things, from good networking practices to making dalgona candy!",
  ],
  7: [
    'Abigail Joesan Johan',
    '2022 Marketing Co-Director | 2021 Marketing Subcommittee Member',
    '2022-exec/Abi.jpg',
    "Being part of WIT's team allowed me to work with like-minded tech-enthusiasts, upskill in various soft and hard skills, and hear from inspiring tech professionals. Designing WIT posts and event covers is a fun, creative and rewarding experience that assists WIT's overall mission!",
  ],
  8: [
    'Natalie Leroy',
    '2022 Media Director | 2021 Education Subcommittee Member',
    '2022-exec/Nat.jpg',
    'No matter what anybody tells you, words and ideas can change the world',
  ],
  9: [
    'Chelsea Chaffey',
    '2022 Publications Director | 2021 Education Subcommittee Member',
    '2022-exec/Chelsea.jpg',
    'The written word has the real potential to intersect with the lives and aspirations of readers. Through WIT, I hope we can inspire our community to explore what is a very rich, vibrant and diverse world of technology.',
  ],
  10: [
    'Yuhan Zhou',
    '2022 Publications Director | 2021 Marketing Subcommittee Member',
    '2022-exec/Yuhan_Edited.jpg',
    'I love the culture at WIT. We give you the whole package: friendships, mentorships and fantastic opportunities for personal and career growth.',
  ],
};

const socials = {
  spArc: [
    'https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371W0xQAE',
    'sparc.png',
  ],
  'Facebook Page': ['https://www.facebook.com/unsw.wit/', 'facebook.png'],
  'Facebook Group': [
    'https://www.facebook.com/groups/unswwit/',
    'facebook-group.png',
  ],
  LinkedIn: [
    'https://www.linkedin.com/company/unsw-women-in-technology/',
    'linkedin.png',
  ],
  Instagram: ['https://www.instagram.com/wit.unsw/', 'instagram.png'],
  Youtube: [
    'https://www.youtube.com/channel/UCQ8PGe3P4ZuDSNCb9vCeTiw/videos/',
    'youtube.png',
  ],
  Twitch: ['https://www.twitch.tv/unswwit', 'twitch.png'],
  Spotify: [
    'https://open.spotify.com/show/1iWagdei1mVoyzg8TqbB2P',
    'spotify.png',
  ],
  Discord: ['https://discord.gg/BWY4tzM326', 'discord.png'],
};

const careerDescription = () => {
  return (
    <ul>
      <>
        <li>
          Organises and plans innovative events that aligns with WIT and our
          sponsors&apos; interests
        </li>
        <li>
          Involves creating event run sheets, booking venues and organising
          catering
        </li>
      </>
    </ul>
  );
};

const competitionDescription = () => {
  return (
    <ul>
      <>
        <li>
          Create competition materials and plan events that align with WIT and
          our sponsors&apos; interests
        </li>
        <li>
          Involves creating event run sheets, booking venues and organising
          catering
        </li>
      </>
    </ul>
  );
};

const hrDescription = () => {
  return (
    <ul>
      <>
        <li>
          In charge of ideating and actualising fun internal bonding events
        </li>
        <li>
          Involved in fostering strong friendship and society culture, which is
          at the heart of WIT
        </li>
      </>
    </ul>
  );
};

const itDescription = () => {
  return (
    <ul>
      <>
        <li>
          Responsible for designing, updating and improving on WIT&apos;s
          official website
        </li>
        <li>
          Supports the creation of IT-related workshops, and events such as
          Hackathon and WIT coding competition
        </li>
      </>
    </ul>
  );
};

const marketingDescription = () => {
  return (
    <ul>
      <>
        <li>
          Responsible for managing WIT&apos;s social media platforms and
          outreach to the wider community
        </li>
        <li>
          Involves creating fun posts, event photography, designing merchandise
          and sending out newsletters
        </li>
      </>
    </ul>
  );
};

const mediaDescription = () => {
  return (
    <ul>
      <>
        <li>
          Generates WIT&apos;s podcast and video content such as the Talk WIT Us
          Podcast
        </li>
        <li>
          Involves bringing new ideas, upskilling, and empowering members in a
          variety of avenues
        </li>
      </>
    </ul>
  );
};

const publicationsDescription = () => {
  return (
    <ul>
      <>
        <li>
          Develop WIT&apos;s written content including blog posts and major
          publications such as WIT&apos;s Careers Guide
        </li>
        <li>
          About bringing new ideas, upskilling, and empowering members in a
          variety of avenues
        </li>
      </>
    </ul>
  );
};

const sponsDescription = () => {
  return (
    <ul>
      <>
        <li>Maintains communication with our extensive network of sponsors</li>
        <li>
          Involves collaborating with other portfolios to host a diverse range
          of events and publications alongside external partners
        </li>
      </>
    </ul>
  );
};

const socialsDescription = () => {
  return (
    <ul>
      <>
        <li>
          Organises and plans philanthropic events for the wider WIT community
        </li>
        <li>
          Involves creating event run sheets, booking venues and organising
          catering
        </li>
      </>
    </ul>
  );
};

export {
  memberQuotes,
  socials,
  careerDescription,
  competitionDescription,
  hrDescription,
  itDescription,
  marketingDescription,
  mediaDescription,
  publicationsDescription,
  sponsDescription,
  socialsDescription,
};
