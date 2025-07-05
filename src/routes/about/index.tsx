import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const teamMembers = [
  {
    name: "[Team Member Name]",
    title: "[Team Member Title]",
    bio: "[Placeholder for a 2-3 sentence bio focusing on their expertise in space, blockchain, or business.]",
    img: "https://placehold.co/160x160?text=Photo"
  },
  {
    name: "[Team Member Name]",
    title: "[Team Member Title]",
    bio: "[Placeholder for a 2-3 sentence bio focusing on their expertise in space, blockchain, or business.]",
    img: "https://placehold.co/160x160?text=Photo"
  },
  {
    name: "[Team Member Name]",
    title: "[Team Member Title]",
    bio: "[Placeholder for a 2-3 sentence bio focusing on their expertise in space, blockchain, or business.]",
    img: "https://placehold.co/160x160?text=Photo"
  }
];

const About: React.FC = () => (
  <Container maxWidth="md" sx={{ py: 8 }}>
    <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
      Meet the Team
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, justifyContent: 'center', alignItems: 'stretch' }}>
      {teamMembers.map((member, idx) => (
        <Box key={idx} sx={{ flex: 1, p: 3, border: '1px solid #222', borderRadius: 3, background: '#111', textAlign: 'center', minWidth: 220 }}>
          <Box component="img" src={member.img} alt={member.name} sx={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', mb: 2, mx: 'auto', background: '#222' }} />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>{member.name}</Typography>
          <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 1 }}>{member.title}</Typography>
          <Typography variant="body2" sx={{ color: 'grey.300' }}>{member.bio}</Typography>
        </Box>
      ))}
    </Box>
  </Container>
);

export default About; 