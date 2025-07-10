class AddTitleCasedToTitles < ActiveRecord::Migration[8.0]
  def change
    add_column :titles, :title_cased, :string, null: false
  end
end
