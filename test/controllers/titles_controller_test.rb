require "test_helper"

class TitlesControllerTest < ActionDispatch::IntegrationTest
  include AuthHelpers

  def setup
    @user = users(:one)
    @title = titles(:one)
    login_as(@user)
  end

  test "should get index" do
    get user_titles_url(@user)
    assert_response :success
  end

  test "should get edit" do
    get edit_user_title_url(@user, @title)
    assert_response :success
  end
end
