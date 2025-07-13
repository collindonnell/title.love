require "test_helper"
require "helpers/auth_helpers"

class SessionsControllerTest < ActionDispatch::IntegrationTest
  include AuthHelpers

  def setup
    @user = users(:one)
    login_as(@user)
  end

  test "should get new" do
    get new_session_url
    assert_response :success
  end
end
