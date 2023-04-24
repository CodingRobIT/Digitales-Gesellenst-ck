import {useNavigate} from "react-router-dom";
import {Box, Button, Card, CardContent, CardHeader, TextField, Typography} from "@mui/material";
import useGameDetail from "./useGameDetail";

type GameDetailProps = {
    deleteGame: (id: string) => void;
};

export default function GameDetails(props: GameDetailProps) {
    const navigate = useNavigate();
    const {game, editedGame, editing, handleFormSubmit, editOnClick, gameInputChange} = useGameDetail();

    function onDeleteClick() {
        if (game) {
            props.deleteGame(game.id);
        }
        navigate("/games");
    }

    return (
        <div>
            {game ? (
                <Card sx={{bgcolor: "transparent", boxShadow: "none"}}>
                    <CardHeader title={game.title}/>
                    <CardContent>
                        <Box sx={{display: "flex", justifyContent: "center", gap: 8}}>
                            <Typography variant="body1" color="text.secondary">
                                {game.genre}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {game.publisher}
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            {game.note}
                        </Typography>
                        {editing ? (
                            <form onSubmit={handleFormSubmit}>
                                <TextField
                                    label="Title"
                                    name="title"
                                    value={editedGame.title}
                                    onChange={gameInputChange}
                                />
                                <TextField
                                    label="Genre"
                                    name="genre"
                                    value={editedGame.genre}
                                    onChange={gameInputChange}
                                />
                                <TextField
                                    label="Publisher"
                                    name="publisher"
                                    value={editedGame.publisher}
                                    onChange={gameInputChange}
                                />
                                <TextField
                                    label="Note"
                                    name="note"
                                    value={editedGame.note}
                                    onChange={gameInputChange}
                                />
                                <Box sx={{display: "flex", justifyContent: "center", gap: 8}}>
                                    <Button
                                        sx={{
                                            bgcolor: "#1E2432",
                                            color: "#fff",
                                            fontWeight: "bold",
                                            minWidth: "80px",
                                            "&:hover": {
                                                color: "black",
                                            },
                                        }}
                                        type="submit"
                                        size="small"
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        sx={{
                                            bgcolor: "#1E2432",
                                            color: "#fff",
                                            fontWeight: "bold",
                                            minWidth: "80px",
                                            "&:hover": {
                                                color: "black",
                                            },
                                        }}
                                        size="small"
                                        onClick={editOnClick}
                                    >
                                        Cancel
                                    </Button>
                                </Box>
                            </form>
                        ) : (
                            <Box sx={{display: "flex", justifyContent: "center", gap: 8}}>
                                <Button
                                    sx={{
                                        bgcolor: "#1E2432",
                                        color: "#fff",
                                        fontWeight: "bold",
                                        minWidth: "80px",
                                        "&:hover": {
                                            color: "black",
                                        },
                                    }}
                                    size="small"
                                    onClick={editOnClick}
                                >
                                    Edit
                                </Button>
                                <Button
                                    sx={{
                                        bgcolor: "#1E2432",
                                        color: "#fff",
                                        fontWeight: "bold",
                                        minWidth: "80px",
                                        "&:hover": {
                                            color: "black",
                                        },
                                    }}
                                    size="small"
                                    onClick={onDeleteClick}
                                >
                                    Delete Game
                                </Button>
                            </Box>
                        )}
                    </CardContent>
                </Card>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}


// import {useNavigate} from "react-router-dom";
// import {Box, Button, Card, CardContent, CardHeader, Typography} from "@mui/material";
// import useGameDetail from "./useGameDetail";
//
// type GameDetailProps = {
//     deleteGame: (id: string) => void
// }
//
// export default function GameDetails(props: GameDetailProps) {
//
//     const navigate = useNavigate()
//     const {game, editedGame, editing, handleFormSubmit, editOnClick, gameInputChange} = useGameDetail()
//
//     function onDeleteClick() {
//         if (game) {
//             props.deleteGame(game.id)
//         }
//
//         navigate("/games")
//     }
//
//     return (
//         <div>
//             {game ? (
//                 <Card sx={{bgcolor: "transparent", boxShadow: "none"}}>
//                     <CardHeader title={game.title}/>
//                     <CardContent>
//                         <Box sx={{display: "flex", justifyContent: "center", gap: 8}}>
//                             <Typography variant="body1" color="text.secondary">
//                                 {game.genre}
//                             </Typography>
//                             <Typography variant="body1" color="text.secondary">
//                                 {game.publisher}
//                             </Typography>
//                         </Box>
//                         <Typography variant="body2" color="text.secondary">
//                             {game.note}
//                         </Typography>
//                         <Box sx={{display: "flex", justifyContent: "center", gap: 8}}>
//                             <Button sx={{bgcolor: '#1E2432', color: '#fff', fontWeight: 'bold', minWidth: '80px',  '&:hover': {
//                                     color: 'black',
//                                 },}}
//                                     size="small"
//                                     onClick={editOnClick}>
//                                 Edit
//                             </Button>
//                             <Button sx={{bgcolor: '#1E2432', color: '#fff', fontWeight: 'bold', minWidth: '80px', '&:hover': {
//                                     color: 'black',
//                                 },}}
//                                     size="small"
//                                     onClick={onDeleteClick}>
//                                 Game Löschen
//                             </Button>
//                         </Box>
//                     </CardContent>
//                 </Card>
//             ) : (
//                 <div>Loading...</div>
//             )}
//         </div>
//     );
// }