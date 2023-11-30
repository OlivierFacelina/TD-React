import './Home.scss'
import { URL } from './../../constants/api'
import { useEffect, useState } from 'react'
import CardList from '../../components/CardList'
import { collection, addDoc, getDocs} from 'firebase/firestore'
import { db } from '../../constants/google-firebase'

export default function Home() {

    const [users, setUsers] = useState([]);

    const createRecord = async () => {
        try {
        const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
        }
    } 

    const getRecord = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        const results = []
        querySnapshot.forEach((doc) => {
            results.push({
                id: doc.id,
                ...doc.data()
            })
        })
        setUsers(results)
    }

    useEffect(() => {
        getRecord()
    }, [])
    // const [data, setData] = useState()
    // const [loading, setLoading] = useState(true)

    // const fetchApi = async () => {
    //     try {
    //         const response = await fetch(URL)
    //         const { results } = await response.json()
    //         setData(results)
    //     } catch (e) {
    //         console.log(e.message)
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     fetchApi()
    // }, [])
    console.log(users);
  return ( 
  <div>
      <div>
        {
            users.length > 0 && users.map(user => (
                <div>
                    <p>{user.first}</p>
                    <p>{user.last}</p>
                    <p>{user.born}</p>
                </div>
            ))
        }
      </div>
      <button onClick={createRecord}>Créer un enregistrement</button>
  </div>
    // loading ? <p>Chargement en cours...</p> : 
    //     <CardList data={data}/>
  )
}
