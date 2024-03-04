import { useMutation } from '@apollo/client';
import { FaTrash } from 'react-icons/fa';

import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';
import { GET_PROJECTS } from '../queries/projectQueries';

export default function ClientRow({ client = {} }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }], // 重新發 request 取得資料

    // https://www.apollographql.com/docs/react/caching/cache-interaction/ 修改 cache 資料
    // update(cache, { data: { deleteClient } }) {
    //   // 要修改的資料
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   // 修改哪一個 request 取得的資料
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((_client) => _client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
