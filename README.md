# Planets Server (Project 2)
> Custom backend server for https://github.com/jasonlerit/project-2-planets

## 💻 Tech Stack
> - TypeScript
> - Express
> - MongoDB

## 🚀 API Endpoints

### Planets
| METHOD | URI                  | ACTION                                                          |
|--------|----------------------|-----------------------------------------------------------------|
| GET    | planets              | controllers/planet_controller@getPlanets                        |
| GET    | planets/id           | controllers/planet_controller@getPlanet                         |

### News
| METHOD | URI                  | ACTION                                                          |
|--------|----------------------|-----------------------------------------------------------------|
| GET    | news                 | controllers/news_controller@getNews                             |

### Feedback
| METHOD | URI                  | ACTION                                                          |
|--------|----------------------|-----------------------------------------------------------------|
| POST   | feedback             | controllers/feedback_controller@sendFeedback                    |

### Auth
| METHOD | URI                  | ACTION                                                          |
|--------|----------------------|-----------------------------------------------------------------|
| POST   | auth/register        | controllers/auth/register_controller@register                   |
| POST   | auth/login           | controllers/auth/login_controller@login                         |
| POST   | auth/google          | controllers/auth/login_with_google_controller@loginWithGoogle   |
| POST   | auth/forgot-password | controllers/auth/forgot_password_controller@forgotPassword      |

### Verification
| METHOD | URI                  | ACTION                                                          |
|--------|----------------------|-----------------------------------------------------------------|
| POST   | verify/account       | controllers/verification_controller@verifyAccount               |
| POST   | verify/password      | controllers/verification_controller@verifyPassword              |

### Leaderboard
| METHOD | URI                  | ACTION                                                          |
|--------|----------------------|-----------------------------------------------------------------|
| POST   | leaderboard          | controllers/quiz/leaderboard_controller@getLeadeboards          |