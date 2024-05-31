import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [list,setList] = useState([]);
  const [isHover,setIsHover] = useState({
    hover: false,
    id: null
  });
  const [singleObject, setSingleObject] = useState({});

  useEffect(() => {
    let ignore = false;
    fetchList().then(result => {
      if (!ignore) {
        setList(result);
      }
    });
    return () => {
      ignore = true;
    };
  },[])

  useEffect(() => {
    // asas
  }, [list])
  
  const fetchList = async () => {
    const response = await axios.get('https://jayna456.github.io/battlefield:8000/getList');
  
    if (response.status === 200) {
      return response.data.data;
    }
  }

  const mouseOut = (id) => {
    const copyObject = {...isHover};
    document.getElementById(id.toString()).style.backgroundColor = "none";
    if(copyObject.id === id) {
      console.log("in if");
      copyObject.hover = false;
      copyObject.id = null;
      for(const item of list) {
        if (item.linkId === id) {
          if(item.color === 'black') {
            item.color = 'white';
          }
          item.background = 'none';
        }
      }
      setList([...list]);
    }
  }

  const mouseOver = (id) => {
    const copyObject = {...isHover};
    if(copyObject.id === id) {
      copyObject.hover = true;
    } else {
      copyObject.id = id;
      copyObject.hover = true;
    }
    setIsHover({...copyObject});
    for(const item of list) {
      if (item.linkId === id) {
        setSingleObject({...item});
        if(item.color === 'white') {
          item.color = 'black';
        }
        item.background = 'white';
      }
    }
    setList([...list]);
  }

  return (
    <div className='content'>
      <div className='sidebar d-flex'>
        <div>
        {list.map(value => 
          <div className='list' style={{color: value.color, backgroundColor: value.background}} id={value.linkId}
            key={value.linkId} onMouseOver={() => mouseOver(value.linkId)} onMouseOut={() => mouseOut(value.linkId)}>
            {value.heading}
          </div>
        )}
        </div>
        {singleObject ? 
          <div className='single-content'>
            <div className='image-container'>
              <img src={singleObject.image} alt={singleObject.linkId} />
            </div>
            <div className='content-heading'>{singleObject.heading}</div>
            <div className='content-desc'>{singleObject.subHeader}</div>
          </div> : <></>
        }
      </div>
    </div>
  );
}

export default App;
