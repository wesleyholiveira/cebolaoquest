module.exports = (category) => ({
    id: category.id,
    name: category.name,
    content: category.content,
    categories_json: JSON.stringify(category),
    player_id: category.player_id
})
