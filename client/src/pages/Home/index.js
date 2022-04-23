import { useQuery } from '@apollo/client';
import { Container, Typography } from '@mui/material';
import ItemList from '../../components/ItemList';
import { GET_FEED, GET_ME } from '../../utils/queries';

export default function Home() {
  const { data, error, loading } = useQuery(GET_FEED);
  const { data: me } = useQuery(GET_ME);

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

  if (loading) {
    //   import spinner
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <h1
        style={{
          padding: '2rem 0',
          testAlign: 'center',
        }}
      >
        The latest and greatest from people you follow:
      </h1>
      <ItemList items={data?.feed} savedItems={me?.me.savedItems}></ItemList>
    </Container>
  );
}
