var appRoot = document.getElementById('app');

class Schools extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            original_data: [  
                {  
                   "district":"bangalore",
                   "block":"north-1",
                   "cluster":"mallasandra",
                   "schoolid":33288,
                   "schoolname":"GKLPS SHIVAPURA",
                   "category":"Lower Primary",
                   "gender":"co-ed",
                   "medium_of_inst":"kannada",
                   "address":"T.Dasarahalli Post",
                   "area":"N-4",
                   "pincode":"Shivapura",
                   "landmark":560057,
                   "identification1":"Near NTTE Bus Stop",
                   "busroutes":"Cream Colour Building",
                   "identification2":248,
                   "latlong":258
                },
                {  
                   "district":"bangalore",
                   "block":"north-1",
                   "cluster":"mallasandra",
                   "schoolid":33284,
                   "schoolname":"GKHPS NARAYANAPURA",
                   "category":"Upper Primary",
                   "gender":"co-ed",
                   "medium_of_inst":"kannada",
                   "address":"T.Dasarahalli Post",
                   "area":"N-4",
                   "pincode":"Narayanapura",
                   "landmark":560057,
                   "identification1":"Near Rolling Mill Bus Stop",
                   "busroutes":"Green Colour Compound",
                   "identification2":248,
                   "latlong":258
                },
                {  
                   "district":"bangalore",
                   "block":"north-1",
                   "cluster":"laggere",
                   "schoolid":32655,
                   "schoolname":"GKLPS CHOKKASANDRA SLUM",
                   "category":"Lower Primary",
                   "gender":"co-ed",
                   "medium_of_inst":"kannada",
                   "address":"T. Dasarahalli Post",
                   "area":"N-4",
                   "pincode":"Chokkasandra",
                   "landmark":560057,
                   "identification1":"Near Jalahalli Cross Bus Stop",
                   "busroutes":"White Colour Building",
                   "identification2":"285 A",
                   "latlong":"285 F"
                },
                {  
                   "district":"bangalore",
                   "block":"north-4",
                   "cluster":"t dasarahalli",
                   "schoolid":32837,
                   "schoolname":"GKMPS T.DASARAHALLI",
                   "category":"Model Primary",
                   "gender":"co-ed",
                   "medium_of_inst":"kannada",
                   "address":"T. Dasarahalli Post",
                   "area":"N-4",
                   "pincode":"T. Dasarahalli",
                   "landmark":560057,
                   "identification1":"Near T.Dasarahalli Bus Stop",
                   "busroutes":"Pink Colour Building",
                   "identification2":"258 A",
                   "latlong":"258 B"
                },
                {  
                   "district":"bangalore",
                   "block":"north-1",
                   "cluster":"laggere",
                   "schoolid":32658,
                   "schoolname":"GKHPS CHOKKASANDRA",
                   "category":"Model Primary",
                   "gender":"co-ed",
                   "medium_of_inst":"kannada",
                   "address":"T.Dasarahalli Post",
                   "area":"N-4",
                   "pincode":"Chokkasandra",
                   "landmark":560057,
                   "identification1":"Near T.Dasarahalli Bus Stop",
                   "busroutes":"Green Colour Compound",
                   "identification2":"Playground",
                   "latlong":250
                },
                {  
                   "district":"bangalore",
                   "block":"north-1",
                   "cluster":"mallasandra",
                   "schoolid":33282,
                   "schoolname":"GKMPS MALLASANDRA(MALLASANDRA)",
                   "category":"Upper Primary",
                   "gender":"co-ed",
                   "medium_of_inst":"kannada",
                   "address":"T.Dasarahalli Post",
                   "area":"N-4",
                   "pincode":"Mallasandra",
                   "landmark":560057,
                   "identification1":"Near Bagalagunte Bus Stop",
                   "busroutes":"Playground",
                   "identification2":250,
                   "latlong":251
                }
             ],
            displayed_data: [  
                {  
                   "district":"bangalore",
                   "block":"north-1",
                   "cluster":"mallasandra",
                   "schoolid":33288,
                   "schoolname":"GKLPS SHIVAPURA",
                   "category":"Lower Primary",
                   "gender":"co-ed",
                   "medium_of_inst":"kannada",
                   "address":"T.Dasarahalli Post",
                   "area":"N-4",
                   "pincode":"Shivapura",
                   "landmark":560057,
                   "identification1":"Near NTTE Bus Stop",
                   "busroutes":"Cream Colour Building",
                   "identification2":248,
                   "latlong":258
                },
                {  
                   "district":"bangalore",
                   "block":"north-1",
                   "cluster":"mallasandra",
                   "schoolid":33284,
                   "schoolname":"GKHPS NARAYANAPURA",
                   "category":"Upper Primary",
                   "gender":"co-ed",
                   "medium_of_inst":"kannada",
                   "address":"T.Dasarahalli Post",
                   "area":"N-4",
                   "pincode":"Narayanapura",
                   "landmark":560057,
                   "identification1":"Near Rolling Mill Bus Stop",
                   "busroutes":"Green Colour Compound",
                   "identification2":248,
                   "latlong":258
                },
                {  
                   "district":"bangalore",
                   "block":"north-1",
                   "cluster":"laggere",
                   "schoolid":32655,
                   "schoolname":"GKLPS CHOKKASANDRA SLUM",
                   "category":"Lower Primary",
                   "gender":"co-ed",
                   "medium_of_inst":"kannada",
                   "address":"T. Dasarahalli Post",
                   "area":"N-4",
                   "pincode":"Chokkasandra",
                   "landmark":560057,
                   "identification1":"Near Jalahalli Cross Bus Stop",
                   "busroutes":"White Colour Building",
                   "identification2":"285 A",
                   "latlong":"285 F"
                },
                {  
                   "district":"bangalore",
                   "block":"north-4",
                   "cluster":"t dasarahalli",
                   "schoolid":32837,
                   "schoolname":"GKMPS T.DASARAHALLI",
                   "category":"Model Primary",
                   "gender":"co-ed",
                   "medium_of_inst":"kannada",
                   "address":"T. Dasarahalli Post",
                   "area":"N-4",
                   "pincode":"T. Dasarahalli",
                   "landmark":560057,
                   "identification1":"Near T.Dasarahalli Bus Stop",
                   "busroutes":"Pink Colour Building",
                   "identification2":"258 A",
                   "latlong":"258 B"
                },
                {  
                   "district":"bangalore",
                   "block":"north-1",
                   "cluster":"laggere",
                   "schoolid":32658,
                   "schoolname":"GKHPS CHOKKASANDRA",
                   "category":"Model Primary",
                   "gender":"co-ed",
                   "medium_of_inst":"kannada",
                   "address":"T.Dasarahalli Post",
                   "area":"N-4",
                   "pincode":"Chokkasandra",
                   "landmark":560057,
                   "identification1":"Near T.Dasarahalli Bus Stop",
                   "busroutes":"Green Colour Compound",
                   "identification2":"Playground",
                   "latlong":250
                },
                {  
                   "district":"bangalore",
                   "block":"north-1",
                   "cluster":"mallasandra",
                   "schoolid":33282,
                   "schoolname":"GKMPS MALLASANDRA(MALLASANDRA)",
                   "category":"Upper Primary",
                   "gender":"co-ed",
                   "medium_of_inst":"kannada",
                   "address":"T.Dasarahalli Post",
                   "area":"N-4",
                   "pincode":"Mallasandra",
                   "landmark":560057,
                   "identification1":"Near Bagalagunte Bus Stop",
                   "busroutes":"Playground",
                   "identification2":250,
                   "latlong":251
                }
             ]
        }

        this.onSearch = this.onSearch.bind(this);
        this.sortData = this.sortData.bind(this);
    }

    
    componentDidMount() {
        fetch('http://127.0.0.1:3000/getData')
          .then(response => response.json())
          .then(data => this.setState({ original_data:data, displayed_data:data }));
      }

      

    onSearch(){
        var search_term = document.getElementById('search_text').value;

        var results = [];
        var searchVal = search_term;
        var len = this.state.displayed_data.length;
        for (var i=0 ; i < len ; i++)
        {
            if (this.state.displayed_data[i]["schoolname"].toString().toLowerCase().indexOf(searchVal.toLowerCase()) != -1
                || this.state.displayed_data[i]["address"].toString().toLowerCase().indexOf(searchVal.toLowerCase()) != -1
                || this.state.displayed_data[i]["area"].toString().toLowerCase().indexOf(searchVal.toLowerCase()) != -1
                || this.state.displayed_data[i]["pincode"].toString() == searchVal
                || this.state.displayed_data[i]["landmark"].toString().toLowerCase().indexOf(searchVal.toLowerCase()) != -1 ) {
                results.push(this.state.displayed_data[i]);
            }
        }
        this.setState({displayed_data: results})
    }

    sortData(filed){
        var data = this.state.displayed_data.slice(0);
        data = data.sort ( ( a, b ) => { return a[filed] > a[filed] } );
        this.setState({displayed_data:data});
    }

    getFilterObject(){
        //
    }

    applyFilter(){
        var data = this.state.displayed_data.slice(0);
        var filter_object = this.getFilterObject();

        for(key in filter_object){
            //
        }

        this.setState({displayed_data:data});
    }
    render(){
        return (
        <div>
            <input id="search_text" type="text" onChange={this.onSearch}/>
            <br/>
            <table>
            <thead>
                <tr>
                <th> <button onClick={() => this.sortData('schoolname')}>NAME </button> </th>
                <th><button onClick={() => this.sortData('medium_of_inst')}>MEDIUM </button></th>
                <th><button onClick={() => this.sortData('category')}>CATEGORY </button></th> 
                <th><button onClick={() => this.sortData('gender')}>GENDER </button></th>
                <th><button onClick={() => this.sortData('pincode')}>PINCODE </button></th> 
                <th><button onClick={() => this.sortData('area')}>AREA </button></th>
                <th><button onClick={() => this.sortData('address')}>ADDRESS </button></th>
                <th><button onClick={() => this.sortData('landmark')}>LANDMARK </button></th> 
                </tr>
                </thead>
                <tbody>
                {
                    this.state.displayed_data.map( (school) => {
                        return(
                            <tr> 
                            <td>{school.schoolname}</td>
                            <td>{school.medium_of_inst}</td>
                            <td>{school.category}</td>
                            <td>{school.gender}</td>
                            <td>{school.pincode}</td>
                            <td>{school.area}</td>
                            <td>{school.address}</td>
                            <td>{school.landmark}</td>
                        </tr>
                        ) 
                    })
                }
                </tbody>
            </table>
        </div>
    )
    }
}


ReactDOM.render(<Schools/>, appRoot);

