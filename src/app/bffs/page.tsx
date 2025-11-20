import Form from 'next/form'
import './bffs.css';
import Friend from '../components/friend/friend';
export default function Page(){
    return(
      <div >
        <main className="flex flex-col gap-8 row-start-2">
          <div>
            Where are your friends in the adventure?
          </div>
          <div>
          <Form action="/search">
            <input name="query" className='search-game'/>
          </Form>
          </div>
          <div className="container">
            <Friend></Friend>
            <Friend></Friend>
            <Friend></Friend>
          </div>
                    <div className="container">
            <Friend></Friend>
            <Friend></Friend>
            <Friend></Friend>
          </div>
                    <div className="container">
            <Friend></Friend>
            <Friend></Friend>
            <Friend></Friend>
          </div>
                    <div className="container">
            <Friend></Friend>
            <Friend></Friend>
            <Friend></Friend>
          </div>
        </main>
      </div>
    );
}