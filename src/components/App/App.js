import './App.css';
import { Component } from 'react';
import MainPage from '../MainPage/MainPage'
import SignInPage from '../SignIn/SignInPage'
import SignUpPage from '../SignUp/SignUpPage'
import RecipePage from '../RecipePage/RecipePage'
import ProfilePage from '../ProfilePage/ProfilePage'
import RecipeBook from '../RecipeBook/RecipeBook'
import RecipeForm from '../RecipeForm/RecipeForm'
// working
import { getAllRecipes } from '../../APICalls.js'
import { getUserWithRecipes } from '../../APICalls.js'
import { recipeById } from '../../APICalls.js'
import { getUser } from '../../APICalls.js'
import { createIngredient } from '../../APICalls.js'
import { createUserRecipe } from '../../APICalls.js'
import { updateUserRecipeRating } from '../../APICalls.js'
import { searchNonProfits } from '../../APICalls.js'
import { registerUser } from '../../APICalls.js'
import { userSignIn } from '../../APICalls.js'
import { createRecipe } from '../../APICalls.js'

// Need autopopulated form
import { updateUser } from '../../APICalls.js'
import { updateIngredient } from '../../APICalls.js'
import { updateRecipe } from '../../APICalls.js'


import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      user: '',
      allRecipes: [],
      loading: true,
    }
  }
  async componentDidMount() {
    const response = await getAllRecipes()
    this.setState({allRecipes: response.allRecipes, loading: false})
  }

  render() {
    // working
    // console.log(getAllRecipes())
    // getUserWithRecipes(84)
    // recipeById(1)
    // getUser(1)
    // searchNonProfits("Food Bank of the Rockies")
    // createUserRecipe(1, 3, 2.5)
    // createIngredient(1, "name", "amount")
    // updateUserRecipeRating(1, 4)
    // registerUser("John", "Doe", "JD@gmail.com", "a street", "a city", "a state", "a zip", "an image", "new user", "1234")
    // userSignIn("mr_cook", "123")
    // createRecipe(1, "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/7/11/0/FNK_the-best-chicken-parmesan_H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1562853897238.jpeg", "Chicken Parmesan", "A classic favorite", "1. chicken 2.???? 3. profit", "533423", "Give Logan Money", [{name:"Chicken",amount:"2 lbs"},{name:"Parmesan",amount:"5 gallons"}])

    // Must have form fields autopopulated in order for these to work
    // updateUser()
    // updateIngredient()
    // updateRecipe(93,
    //             "https://www.tasteofhome.com/wp-content/uploads/2018/01/Ginger-Pork-Stir-Fry_EXPS_QEBZ20_17024_E01_23_3b.jpg",
    //             "Easy Stir-Fry",
    //             "It's actually not easy",
    //             "Updated instructions",
    //             "4593516",
    //             "HUNGRY NO MORE")

    return (
      <BrowserRouter>
      <Switch>
        <div className="App">
          <Route path='/signin'>
            <SignInPage />
          </Route>
          <Route path='/signup'>
            <SignUpPage />
          </Route>
          <Route
             path='/recipepage/:recipeId'
             render={({match})=>{
               const recipeId = match.params.recipeId
               return (
                 <RecipePage id={recipeId} />
               )
           }}/>
          <Route path='/profilepage'>
            <ProfilePage />
          </Route>
          <Route path='/recipebook'>
            <RecipeBook />
          </Route>
          <Route path='/recipeform'>
            <RecipeForm />
          </Route>
          <Route exact path='/'>
            <MainPage allRecipes={this.state.allRecipes} loading={this.state.loading}/>
          </Route>
        </div>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
